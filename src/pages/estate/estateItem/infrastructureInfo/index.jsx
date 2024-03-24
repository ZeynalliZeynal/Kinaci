export default function InfrastructureInfo({ estateItem }) {
  return (
    <div className="text-blue-900 grid gap-5 mt-11">
      <h3 className="text-5xl">Obyekt infrastrukturu</h3>
      <ul className="grid gap-5 grid-cols-1 md:grid-cols-3 sm:grid-cols-2">
        {estateItem?.facility_infrastructure.map((info, index) => (
          <li key={index} className="justify-start">
            {info}
          </li>
        ))}
      </ul>
    </div>
  )
}
