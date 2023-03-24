import { InstituteLogo } from "../../../shared/ui-kit/institute-logo/institute-logo"
import "./institutes-grid.css"

type Institute = {
  instid: string
  instname: string
  photourl: string
}

const institutes: Institute[] = [
  {
    photourl:
      "https://sun6-21.userapi.com/s/v1/if2/LmVis6Stwa0AsauFzLjxA0A6-yWKNX16fxGqUxUmfG9rhfaj0DLhs9wzFwr1giKqvO9kPM2AzIvTd_MTk0YcTmKX.jpg?size=200x200&quality=96&crop=20,0,200,200&ava=1",
    instid: "iritrtf",
    instname: "ИРИТ-РТФ",
  },
]

export function Institutes() {
  // const [institutes, setInstitutes] = useState<Institute[]>([])
  // useEffect(() => {
  //   axios
  //     .get("http://89.108.81.160:8080")
  //     .then((resp: AxiosResponse<Institute[]>) => {
  //       setInstitutes(resp.data)
  //     })
  // }, [])

  return (
    <div className="main__institutes">
      {institutes.map((institute) => (
        <InstituteLogo
          photo={institute.photourl}
          key={institute.instid}
          title={institute.instname}
        />
      ))}
    </div>
  )
}
