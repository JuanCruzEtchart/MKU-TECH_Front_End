import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Home(props) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  /*   const center = useMemo(
    () => ({ lat: Number(props.latitude), lng: Number(props.longitude) }),
    []
  ); */

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      zoom={16}
      center={{ lat: Number(props.latitude), lng: Number(props.longitude) }}
      mapContainerClassName="map-container"
      /* options={{ mapId: "22b8508180436ad7" }} */
      /* googleMapURL="22b8508180436ad7"  */
      className="map"
    >
      <Marker
        position={{
          lat: Number(props.latitude),
          lng: Number(props.longitude),
        }}
      />
    </GoogleMap>
  );
}
