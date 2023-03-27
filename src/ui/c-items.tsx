interface ItemProps {
  number: string,
  label: string
}

export default function HItems ({ number, label }: ItemProps) {
  return (
    <div className="flex items-center p-3">
      <h1 className="mr-4">{ number }</h1>
      <h3 className="text-dark-100">{ label }</h3>
    </div>
  )
}