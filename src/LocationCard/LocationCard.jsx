import { Card, CardContent, Typography } from '@mui/material';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  height: '21rem'
};

const center = {
    lat: 36.5750,
    lng: 59.1758
};

function LocationCard() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          
        </Typography>

        <LoadScript googleMapsApiKey="AIzaSyCM8dVYZB5v38uf20hdL0pXkegk2UQdrLs">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </CardContent>
    </Card>
  );
}

export default LocationCard;
