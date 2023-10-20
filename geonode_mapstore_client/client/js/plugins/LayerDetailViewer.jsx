/*
 * Copyright 2021, GeoSolutions Sas.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { createPlugin, getMonitoredState } from '@mapstore/framework/utils/PluginsUtils';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { getConfigProp } from '@mapstore/framework/utils/ConfigUtils';
import DetailsPanel from '@js/components/DetailsPanel';
import { userSelector } from '@mapstore/framework/selectors/security';
import {
    editTitleResource,
    editAbstractResource,
    editThumbnailResource,
    setFavoriteResource,
    setMapThumbnail,
    setResourceThumbnail,
    enableMapThumbnailViewer,
    downloadResource,
    backupResource,
    restoreResource
} from '@js/actions/gnresource';
import { requestResource } from '@js/actions/gnsearch'
import { processingDownload } from '@js/selectors/resourceservice';
import FaIcon from '@js/components/FaIcon/FaIcon';
import controls from '@mapstore/framework/reducers/controls';
import { setControlProperty } from '@mapstore/framework/actions/controls';
import gnresource from '@js/reducers/gnresource';
import gnsearchEpics from '@js/epics/gnsearch';
import gnsearch from '@js/reducers/gnsearch';
import {
    canEditResource,
    isNewResource,
    getResourceId,
    isThumbnailChanged,
    updatingThumbnailResource
} from '@js/selectors/resource';
import {
    getUpdatedLayer,
} from '@mapstore/framework/selectors/styleeditor';
import GNButton from '@js/components/Button';
import useDetectClickOut from '@js/hooks/useDetectClickOut';
import OverlayContainer from '@js/components/OverlayContainer';
import { withRouter } from 'react-router';
import { hashLocationToHref } from '@js/utils/SearchUtils';
import Message from '@mapstore/framework/components/I18N/Message';
import { layersSelector } from '@mapstore/framework/selectors/layers';
import { mapSelector } from '@mapstore/framework/selectors/map';
import { resourceHasPermission } from '@js/utils/ResourceUtils';
import { parsePluginConfigExpressions } from '@js/utils/MenuUtils';
import tooltip from '@mapstore/framework/components/misc/enhancers/tooltip';

const Button = tooltip(GNButton);

const ConnectedDetailsPanel = connect(
    createSelector([
        state => state?.gnresource?.data || null,
        state => state?.gnresource?.loading || false,
        state => state?.gnresource?.data?.favorite || false,
        state => state?.gnsave?.savingThumbnailMap || false,
        isThumbnailChanged,
        updatingThumbnailResource,
        mapSelector,
        state => state?.gnresource?.showMapThumbnail || false,
        processingDownload
    ], (resource, loading, favorite, savingThumbnailMap, thumbnailChanged, resourceThumbnailUpdating, mapData, showMapThumbnail, downloading) => ({
        resource,
        loading,
        savingThumbnailMap,
        favorite: favorite,
        isThumbnailChanged: thumbnailChanged,
        resourceThumbnailUpdating,
        initialBbox: mapData?.bbox,
        enableMapViewer: showMapThumbnail,
        downloading,
        canDownload: resourceHasPermission(resource, 'download_resourcebase'),
        resourceId: resource.pk
    })),
    {
        closePanel: setControlProperty.bind(null, 'rightOverlay', 'enabled', false),
        onFavorite: setFavoriteResource,
        onMapThumbnail: setMapThumbnail,
        onResourceThumbnail: setResourceThumbnail,
        onClose: enableMapThumbnailViewer,
        onAction: downloadResource
    }
)(DetailsPanel);

const ButtonViewer = ({ onClick, backupResource, hide, layer, requestResource, size, status, showMessage }) => {
    const layerResourceId = layer.extendedParams && layer.extendedParams.pk ? layer.extendedParams.pk : null
    const handleClickButton = () => {
        backupResource()
        requestResource(layerResourceId, "dataset")
        onClick();
    };

    return !hide && layerResourceId && status == 'LAYER' ? (
        <Button
            variant="primary"
            className="square-button-md"
            size={size}
            onClick={handleClickButton}
            tooltipId={<Message msgId={`gnviewer.info`} />}
        >
            {!showMessage ? <FaIcon name="info-circle" /> : <Message msgId="gnviewer.editInfo"/>}
        </Button>
    ) : null;
};

const ConnectedButton = connect(
    createSelector([isNewResource, getResourceId, getUpdatedLayer], (isNew, resourcePk, layer) => ({
        hide: isNew || !resourcePk,
        layer: layer
    })),
    {
        onClick: setControlProperty.bind(
            null,
            'rightOverlay',
            'enabled',
            'LayerDetailViewer'
        ),
        requestResource: requestResource,
        backupResource: backupResource
    }
)((ButtonViewer));

function LayerDetailViewer({
    location,
    restoreResource,
    enabled,
    onEditResource,
    onEditAbstractResource,
    onEditThumbnail,
    canEdit,
    hide,
    user,
    onClose,
    monitoredState,
    queryPathname = '/',
    tabs = []
}) {
    const parsedConfig = parsePluginConfigExpressions(monitoredState, { tabs });

    const handleTitleValue = (val) => {
        onEditResource(val);
    };

    const handleAbstractValue = (val) => {
        onEditAbstractResource(val);
    };
    const handleEditThumbnail = (val) => {
        onEditThumbnail(val, true);
    };

    const node = useDetectClickOut({
        disabled: !enabled,
        onClickOut: () => {
            restoreResource()
            onClose();
        }
    });

    const afterClosePanel = () => {
        restoreResource()
    }

    const handleFormatHref = (options) => {
        return hashLocationToHref({
            location,
            ...options
        });
    };

    if (hide) {
        return null;
    }

    return (
        <OverlayContainer
            enabled={enabled}
            ref={node}
            className="gn-overlay-wrapper"
        >
            <ConnectedDetailsPanel
                editTitle={handleTitleValue}
                afterClosePanel={afterClosePanel}
                editAbstract={handleAbstractValue}
                editThumbnail={handleEditThumbnail}
                activeEditMode={false}
                enableFavorite={!!user}
                formatHref={handleFormatHref}
                tabs={parsedConfig.tabs}
                pathname={queryPathname}
            />
        </OverlayContainer>
    );
}

const LayerDetailViewerPlugin = connect(
    createSelector(
        [
            (state) =>
                state?.controls?.rightOverlay?.enabled === 'LayerDetailViewer',
            canEditResource,
            getUpdatedLayer,
            isNewResource,
            getResourceId,
            userSelector,
            state => getMonitoredState(state, getConfigProp('monitorState'))
        ],
        (enabled, canEdit, layer, isNew, resourcePk, user, monitoredState) => ({
            enabled,
            canEdit,
            layer,
            hide: isNew || !resourcePk,
            user,
            monitoredState
        })
    ),
    {
        onEditResource: editTitleResource,
        onEditAbstractResource: editAbstractResource,
        onEditThumbnail: editThumbnailResource,
        restoreResource: restoreResource,
        onClose: setControlProperty.bind(null, 'rightOverlay', 'enabled', false)
    }
)(withRouter(LayerDetailViewer));

export default createPlugin('LayerDetailViewer', {
    component: LayerDetailViewerPlugin,
    containers: {
        TOC: {
            target: 'toolbar',
            Component: ConnectedButton
        },
    },
    epics: {
        ...gnsearchEpics
    },
    reducers: {
        gnresource,
        gnsearch,
        controls
    }
});
