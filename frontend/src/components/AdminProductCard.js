import React from 'react';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import AdminEditProduct from './AdminEditProduct';
import { toast } from 'react-toastify';
import SummaryApi from '../common';

const AdminProductCard = ({ data, fetchdata }) => {
  const [openEditProduct, setOpenEditProduct] = React.useState(false);

  const handleDeleteProduct = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(SummaryApi.updateProduct.url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ productId: data._id })
      });

      const responseData = await response.json();

      if (responseData.success) {
        toast.success("Product deleted successfully!");
        fetchdata();
      } else {
        toast.error(responseData.message);
      }
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <>
      <div className='bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all border hover:border-red-200 w-72'>
        <div className='w-full h-48 bg-slate-200 rounded-lg overflow-hidden mb-4'>
          <img 
            src={data?.productImage[0]} 
            alt={data?.productName}
            className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
          />
        </div>
        
        <h3 className='font-semibold text-lg line-clamp-1 mb-2'>{data?.productName}</h3>
        <p className='text-slate-500 capitalize mb-2'>{data?.category}</p>
        
        <div className='flex gap-3 mb-4'>
          <p className='text-red-600 font-bold text-xl'>₹{data?.sellingPrice}</p>
          <p className='text-slate-500 line-through'>₹{data?.price}</p>
        </div>

        <div className='flex gap-2'>
          <button 
            className='flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2'
            onClick={() => setOpenEditProduct(true)}
          >
            <MdModeEdit /> Edit
          </button>
          <button 
            className='p-2 bg-red-100 text-red-600 hover:bg-red-600 hover:text-white rounded-lg transition-colors'
            onClick={handleDeleteProduct}
          >
            <MdDelete />
          </button>
        </div>
      </div>

      {openEditProduct && (
        <AdminEditProduct 
          onClose={() => setOpenEditProduct(false)} 
          productData={data}
          fetchdata={fetchdata}
        />
      )}
    </>
  );
};

export default AdminProductCard;
