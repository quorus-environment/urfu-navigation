import { YMaps, Map, Placemark } from "react-yandex-maps"
import RTF from "../../../shared/assets/RTF.svg"
import { useNavigate } from "react-router-dom"

export const MainMap = () => {
  const open = useNavigate()
  return (
    <YMaps>
      <Map
        height="100%"
        width="100%"
        defaultState={{ center: [56.842862, 60.652578], zoom: 15 }}
      >
        <Placemark
          onClick={() => {
            open("/irit-rtf")
          }}
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
}
