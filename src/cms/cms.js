import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import TrainingPostPreview from './preview-templates/TrainingPostPreview'
import LidmaatschapPagePreview from "./preview-templates/LidmaatschapPostPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('lidmaatschap', LidmaatschapPagePreview);
CMS.registerPreviewTemplate('training', TrainingPostPreview);
