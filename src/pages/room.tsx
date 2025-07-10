import { Link, Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomId: string
}

export function Room() {
  const params = useParams<RoomParams>()

  if (!params.roomId) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      <div>Room details</div>

      {JSON.stringify(params)}
      <br />

      <Link className="underline" to="../">
        voltar
      </Link>
    </div>
  )
}
