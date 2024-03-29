import { useContext, useEffect } from 'react';
import SkillContext from '../../Context/SkillContext';
import { useParams } from "react-router-dom";

export const DummyEdit = () => {
    const {formValues, onChange, errors, dummy,  getDummy, updateDummy} = useContext(SkillContext);
    let { id } = useParams();

    useEffect(() => {
        getDummy(id);
    }, [])
    return <div className="mt-12">
        <form 
        onSubmit={updateDummy} 
        className="max-w-md mx-auto p-4 bg-white shadow-md rounded-sm">
            <div className="space-y-6">
                <div className="mb-4">
                    <label htmlFor="product" className="block mb-2 text-sm font-medium">
                        Product
                        </label>
                    <input 
                    name="product" 
                    value={formValues["product"]} 
                    onChange={onChange} 
                    className="border border-gray-300 text-gray-300 text-sm rounded-sm block w-full p-2" 
                    />
                    {errors.product && <span className="text-sm text-red-400">{errors.product[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium">
                        Price
                        </label>
                    <input name="price" 
                    value={formValues["price"]} 
                    onChange={onChange} 
                    className="border border-gray-300 text-gray-300 text-sm rounded-sm block w-full p-2" 
                    />
                    {errors.price && <span className="text-sm text-red-400">{errors.price[0]}</span>}
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium">
                        Category
                        </label>
                    <input name="category" 
                    value={formValues["category"]} 
                    onChange={onChange} 
                    className="border border-gray-300 text-gray-300 text-sm rounded-sm block w-full p-2" 
                    />
                    {errors.category && <span className="text-sm text-red-400">{errors.category[0]}</span>}
                </div>
            </div>
            <div className="my-4">
                <button className="px-4 py-2 bg-indigo-500 hover:bg-indigo-700 text-white rounded-md">
                    Update
                </button>
            </div>
        </form>
    </div>
};