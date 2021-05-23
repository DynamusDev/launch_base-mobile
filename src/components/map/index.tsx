import React, {useState, useEffect} from 'react';
import { Marker, Callout } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import { Icon } from '../icon'

import { Container, CustomMarker } from './styles';

interface Props {
  region?: {
    latitude: number,
    longitude: number,
    latitudeDelta?: 0.0922,
    longitudeDelta?: 0.0421
  },
  markerTitle?: string,
  markers?: any,
  onRegionChange?: () => void
}

export function Map(props: Props) {
  const [location, setLocation] = useState(null);

  async function getLocation(){
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    let location = await Location.getCurrentPositionAsync({});
    
    // Center the map on the location we just fetched.
      setLocation({ 
        latitude: location.coords.latitude, 
        longitude: location.coords.longitude, 
        latitudeDelta: 0.0922, 
        longitudeDelta: 0.0421 
      });
  };

  useEffect(() => {
    getLocation()
  }, [])

  return (
    <Container 
      region={location}
      onRegionChange={props.onRegionChange}
    >
      <CustomMarker
        coordinate={location}
        title={props.markerTitle || 'Você está aqui'}
      />

      {props.markers?.map(marker => 
        <Marker 
          key={marker.id}
          coordinate={{
            latitude: marker.latitude,
            longitude: marker.longitude
          }}
        >
          <Callout>

            <Icon name='user' />
          </Callout>
        </Marker>
      )}
    </Container>
  )
}