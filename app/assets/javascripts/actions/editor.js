'use strict';

import api from '../utils/api';

export default {

  switchApp: (app) => ({
    app
  }),

  updateBody: (filename, body) => ({
    filename,
    body
  }),

  switchFile: (newFile) => ({
    currentFile: newFile
  }),

  toggleHeader: (show) => ({
    show
  }),

  updateName: (newName) => ({
    newName
  }),

  updateBuildId: (newBuildId) => ({
    newBuildId
  }),

  saveApp: (appId, name, buildId, fileBodies) => ({
    promise: api.saveApp(appId, name, buildId, fileBodies),
    fileBodies
  }),

  toggleAppPickStatus: (appId, picked) => ({
    promise: api.toggleAppPickStatus(appId, picked),
    picked
  }),

  saveFile: (appId, filename, filebody) => ({
    promise: api.saveFile(appId, filename, filebody),
    filename
  }),

  forkApp: (appId) => ({
    promise: api.forkApp(appId)
  }),

  toggleFileSelector: () => true

};
