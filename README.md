# react-cloudinary-img

A component to help render a Cloudinary image.

## Installation

    npm install react-cloudinary-img --save

## Usage

The `CloudinaryImage` component creates an `img` element that renders the specified cloudinary image.
The `image` prop can either be a full cloudinary object:

    import CloudinaryImage from 'react-cloudinary-img';

    const image = {
      secure_url: 'https://res.cloudinary.com/had5j0iqt/image/upload/v1438144781/samples/artists/31.jpg',
      height: 150,
      width: 150,
      url: 'http://res.cloudinary.com/had5j0iqt/image/upload/v1438144781/samples/artists/31.jpg',
      resource_type: 'image',
      format: 'jpg',
      version: 1438144781,
      public_id: 'samples/artists/31'
    };

    <CloudinaryImage image={image} cloudName="had5j0iqt" options={{ width: 100, height: 100, crop: 'fill' }} className="img-rounded" />

Or just the public id of the image:

    <CloudinaryImage image="samples/artists/31" cloudName="had5j0iqt" options={{ width: 380, height: 500, crop: 'fill' }} className="img-rounded" />

The `options` prop is used to specify Cloudinary image transformations, for a list of options, visit the [Cloudinary documentation](http://cloudinary.com/documentation/image_transformations).

### Using context to set `cloud_name` globally

To avoid needing to specifiy `cloudName` everytime, you can also define the cloud name globally through a `contextType` in your root React component. For example:

    class Application extends Component {
      getChildContext() {
        return { cloudName: 'had5j0iqt' };
      }
    }

    Application.childContextTypes = {
      cloudName: React.PropTypes.string,
    };

## License

MIT Licensed. Copyright (c) Edmond Leung 2015.
