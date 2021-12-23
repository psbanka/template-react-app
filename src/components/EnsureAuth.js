import * as React from "react"

import { Redirect } from "react-router-dom"
import { isOnline } from "../atoms/permissions"
import sessionState from "../atoms/session"
import { useRecoilValue } from "recoil"

type Props = {
  render: React.Node,
}
const UserData = (props: Props) => {
  const session = useRecoilValue(sessionState)
  const permissionsLoaded = useRecoilValue(isOnline)
  if (permissionsLoaded === false) return ""
  if (session == null || session.user.id == null) {
    return <Redirect to={"/auth"} />
  }
  return props.render(session)
}

function EnsureAuth(props: Props): React.Node {
  return (
    <React.Suspense fallback="">
      <UserData render={props.render} />
    </React.Suspense>
  )
}

export default EnsureAuth