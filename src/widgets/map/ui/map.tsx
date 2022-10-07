import { YMaps, Map, Placemark } from "react-yandex-maps"
import RTF from "../../../shared/assets/RTF.svg"

export const MainMap = () => (
  <YMaps>
    <Map
      height="100%"
      width="100%"
      defaultState={{ center: [56.842862, 60.652578], zoom: 15 }}
    >
      <Placemark
        options={{
          iconLayout: "default#image",
          iconImageHref: RTF,
          iconImageSize: [64, 32],
          iconImageOffset: [25, -25],
        }}
        geometry={[56.840508, 60.650206]}
      />
    </Map>
  </YMaps>
)
