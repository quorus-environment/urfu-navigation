import { YMaps, Map } from "react-yandex-maps"

export const MainMap = () => (
  <YMaps>
    <Map
      height="100%"
      width="100%"
      defaultState={{ center: [56.842862, 60.652578], zoom: 15 }}
    />
  </YMaps>
)
