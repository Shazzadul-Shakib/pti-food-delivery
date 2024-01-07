'use client';
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/slices/addProductSlice";

export default function AddProducts({ toggleModal, isLoading }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const apiKey = "9dcf6f30ed7051570cbbc0a2fe8f8e1d";

      // new FormData object to handle file uploads
      const formData = new FormData();
      formData.append("image", data.Image[0]);

      // POST request to the ImageBB API
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${apiKey}`,
        {
          method: "POST",
          body: formData,
        }
      );

      // Parse the response
      const result = await response.json();

      // get the image URL
      data.ImageUrl = result?.data?.url;

      // Log the updated data object
      dispatch(addProduct(data));
      reset(), dispatch(toggleModal());
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };
  return (
    <main className="bg-[#EEEFF0] w-1/3 p-4 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-2">
          <input
            type="text"
            placeholder="Enter Product Name"
            {...register("Name", { required: true })}
            className="w-full p-2 outline-1 text-sm rounded-lg"
          />
          {errors.Name && (
            <span className="text-xs my-1 text-red-500">
              This field is required
            </span>
          )}
        </div>
        <div className="my-2">
          <input
            type="file"
            {...register("Image", { required: true })}
            className="w-full p-2 outline-1 text-sm rounded-lg"
          />
          {errors.Image && (
            <span className="text-xs my-1 text-red-500">
              This field is required
            </span>
          )}
        </div>

        <input
          type="submit"
          value={isLoading ?"Adding...": "Add Product"}
          className=" text-center w-full text-sm bg-[#FC6011] px-4 py-2 rounded-lg text-white"
        />
      </form>
    </main>
  );
}