import Sticky from 'react-stickynode';
import { Header } from './Components/Header';
export default function App() {
  return (
     <div className="w-full min-h-screen overflow-x-hidden mb-1 px-5 max-w-[1000px] text-sm font-offside mx-auto">
      <main>
        <Sticky innerZ={50}>
          <Header/>
        </Sticky>
      </main>
    </div>
  )
}