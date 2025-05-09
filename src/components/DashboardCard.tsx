type DashboardCardProps = {
  title: string;
  value: string | number;
};

export default function DashboardCard({ title, value }: DashboardCardProps) {
  return (
    <div className='bg-white p-4 rounded shadow-md text-center'>
      <h3 className='text-sm text-gray-500 mb-2 uppercase tracking-wide'>
        {title}
      </h3>
      <p className='text-2xl font-bold text-gray-800'>{value}</p>
    </div>
  );
}
