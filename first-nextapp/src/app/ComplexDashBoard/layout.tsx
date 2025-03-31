export default function RootLayout({
  children,
  users,
    revenue,
    notifications,
    login,

}: {
  children: React.ReactNode,
  users:React.ReactNode,
    revenue:React.ReactNode,
    notifications:React.ReactNode,
    login:React.ReactNode
}) {
  const isLoginIn = false;
  return isLoginIn ? (
    <>
      <div>{children}</div>
        <div className="flex h-100%"> 
            <div className="flex flex-col">
                <div>{users}</div>
                <div>{revenue}</div>
            </div>
            <div className="flex flex-1">
                {notifications}
            </div> 
         </div>
    </>
  ):(
    <>
      <div>{children}</div>
      <div>THIS IS LOGIN PAGE</div>
      <div>{login}</div>
    </>
  )
}
