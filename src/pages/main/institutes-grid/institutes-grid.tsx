import { InstituteLogo } from "../../../shared/ui/institute-logo/institute-logo"
import "./institutes-grid.css"

type Institute = {
  instid: string
  instname: string
  photourl: string
}

const institutes: Institute[] = [
  {
    photourl: "https://posurfu.ru/wp-content/uploads/2020/02/K29FWJYxtJ0.jpg",
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
