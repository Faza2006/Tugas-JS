import { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/";

const SkillContext = createContext();

const initialform = {
        name: "",
        slug: "",
        product:"",
        price:"",
        category:"",
        pelanggan:"",
        alamat:"",
        telp:""
}

export const SkillProvider = ({ children }) => {
    const [formValues, setFormValues,] = useState(initialform);
    const [skills, setSkills] = useState([]);
    const [skill, setSkill] = useState([]);
    const [dummies, setDummies] = useState([]);
    const [dummy, setDummy] = useState([]);
    const [pelanggans, setPelanggans] = useState([]);
    const [pelanggan, setPelanggan] = useState([]);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const onChange = (e) => {
        const {name,value} = e.target;
        setFormValues({...formValues, [name]: value})
    };

    const getSkills = async () => {
        const apiSkills = await axios.get("skills");
        setSkills(apiSkills.data.data);
    };

    const getDummies = async () => {
        const apiDummies = await axios.get("dummies");
        setDummies(apiDummies.data.data);
    };

    const getPelanggans = async () => {
        const apiPelanggans = await axios.get("pelanggans");
        setPelanggans(apiPelanggans.data.data);
    };

    const getSkill = async (id) => {
        const response = await axios.get("skills/" + id);
        const apiSkill = response.data.data
        setSkill(apiSkill);
        setFormValues({
            name: apiSkill.name,
            slug: apiSkill.slug,
        });
    };

    const getDummy = async (idproduct) => {
        const response = await axios.get("dummies/" + idproduct);
        const apiDummy = response.data.data
        setDummy(apiDummy);
        setFormValues({
            product: apiDummy.product,
            price: apiDummy.price,
            category: apiDummy.category,
        });
    };

    const getPelanggan = async (idpelanggan) => {
        const response = await axios.get("pelanggans/" + idpelanggan);
        const apiPelanggan = response.data.data
        setPelanggan(apiPelanggan);
        setFormValues({
            pelanggan: apiPelanggan.pelanggan,
            alamat: apiPelanggan.alamat,
            telp: apiPelanggan.telp,
        });
    };

    const storeSkill = async (e) => {
        e.preventDefault();
        try{
            await axios.post("skills", formValues)
            getSkills();
            navigate("/skills");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const storeDummy = async (e) => {
        e.preventDefault();
        try{
            await axios.post("dummies", formValues)
            getDummies();
            navigate("/dummies");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const storePelanggan = async (e) => {
        e.preventDefault();
        try{
            await axios.post("pelanggans", formValues)
            getPelanggans();
            navigate("/pelanggans");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const updateSkill = async (e) => {
        e.preventDefault();
        try{
                await axios.put("skills/" + skill.id, formValues);
                getSkills();
                navigate("/skills");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const updateDummy = async (e) => {
        e.preventDefault();
        try{
                await axios.put("dummies/" + dummy.idproduct, formValues);
                getDummies();
                navigate("/dummies");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const updatePelanggan = async (e) => {
        e.preventDefault();
        try{
                await axios.put("pelanggans/" + pelanggan.idpelanggan, formValues);
                getPelanggans();
                navigate("/pelanggans");
        } catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors)
            }
        }
    }

    const deleteSkill = async (id) => {
        await axios.delete("skills/" + id);
        getSkills();
    }

    const deleteDummy = async (idproduct) => {
        await axios.delete("dummies/" + idproduct);
        getDummies();
    }

    const deletePelanggan = async (idpelanggan) => {
        await axios.delete("pelanggans/" + idpelanggan);
        getPelanggans();
    }

    return <SkillContext.Provider 
    value={{ skill, 
        skills, 
        getSkill, 
        dummies,
        getDummies, 
        getDummy,
        getSkills, 
        pelanggan,
        pelanggans,
        getPelanggans,
        getPelanggan,
        onChange, 
        formValues, 
        storeSkill,
        storeDummy,
        storePelanggan,
        errors,
        updateSkill,
        updateDummy,
        updatePelanggan,
        deleteSkill,
        deleteDummy,
        deletePelanggan
    }}
    >
        {children}
    </SkillContext.Provider>
}

export default SkillContext;
