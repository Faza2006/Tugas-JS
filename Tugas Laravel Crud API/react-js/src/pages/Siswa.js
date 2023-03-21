import Listsiswa from "./Listsiswa";

function Siswa() {

    const nama= ['Joni','Jony','Rafa']
    return (
    <div className="App">
        <Listsiswa judul={nama}/>
    </div>
    );
}

export default Siswa;