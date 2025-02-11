
export default function RootLayout({
  children,
  users,
    revenue,
    notifications,

}: {
  children: React.ReactNode,
  users:React.ReactNode,
    revenue:React.ReactNode,
    notifications:React.ReactNode,
}) {
  return (
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
  )
}
