import { Routes, Route, Link } from 'react-router-dom'
import { SkillProvider } from "./Context/SkillContext";

import { Home } from "./components/Home";

import { SkillIndex } from "./components/skills/SkillIndex";
import { SkillCreate } from "./components/skills/SkillCreate";
import { SkillEdit } from "./components/skills/SkillEdit";

import { DummyIndex } from "./components/Dummy/DummyIndex";
import { DummyCreate } from "./components/Dummy/DummyCreate";
import { DummyEdit } from "./components/Dummy/DummyEdit";

import { PelangganIndex } from "./components/Pelanggan/PelangganIndex";
import { PelangganCreate } from "./components/Pelanggan/PelangganCreate";
import { PelangganEdit } from "./components/Pelanggan/PelangganEdit";

function App() {
  return (
    <SkillProvider>
    <div className="Bg-slate-200">
      <div className='max-w-7xl mx-auto min-h-screen'>
        <nav>
          <ul className='flex'>
            <li className='m-2 p-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md'>
              <Link to="/">Home</Link>
            </li>
            <li className='m-2 p-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md'>
              <Link to="/skills">Skill</Link>
            </li>
            <li className='m-2 p-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md'>
              <Link to="/dummies">Product</Link>
            </li>
            <li className='m-2 p-2 bg-gray-500 hover:bg-gray-700 text-white rounded-md'>
              <Link to="/pelanggans">Pelanggan</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills/" element={<SkillIndex />} />
          <Route path="/skills/create" element={<SkillCreate />} />
          <Route path="/skills/:id/edit" element={<SkillEdit />} />
          <Route path="/dummies/" element={<DummyIndex />} />
          <Route path="/dummies/create" element={<DummyCreate />} />
          <Route path="/dummies/:id/edit" element={<DummyEdit />} />
          <Route path="/pelanggans/" element={<PelangganIndex />} />
          <Route path="/pelanggans/create" element={<PelangganCreate />} />
          <Route path="/pelanggans/:id/edit" element={<PelangganEdit />} />
        </Routes>
      </div>
    </div>
    </SkillProvider>
  );
}

export default App;
