import AppRoutes from "./AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <Navbar />
      <main className='p-6'>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
