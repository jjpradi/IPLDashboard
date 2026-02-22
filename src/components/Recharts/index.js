import {PieChart, Pie, Cell, Legend} from 'recharts'
const Recharts = props => {
  const {dataStat} = props

  console.log(dataStat)
  let w = 0
  let p = 0
  let d = 0

  for (let s of dataStat) {
    if (s.matchStatus === 'Lost') {
      p += 1
    } else if (s.matchStatus === 'Won') {
      w += 1
    } else {
      d += 1
    }
  }
  const newData = [
    {name: 'win', count: w},
    {name: 'loss', count: p},
    {name: 'draw', count: d},
  ]
  console.log(newData)

  return (
    <div>
      <PieChart width={400} height={300}>
        <Pie
          data={newData}
          innerRadius="20%"
          cx="40%"
          cy="60%"
          startAngle={0}
          endAngle={360}
          dataKey="count"
        >
          <Cell name="win" fill="green" />
          <Cell name="loss" fill="red" />

          <Cell name="draw" fill="grey" />
        </Pie>
        <Legend
          iconType="circle"
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </PieChart>
    </div>
  )
}

export default Recharts
