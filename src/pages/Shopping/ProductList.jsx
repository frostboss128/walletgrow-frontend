import React, { useState } from "react";
import { Button } from "../../components/ui/button";
import { Switch } from "../../components/ui/switch";
import { useUpdateProductMutation } from "../../slices/listApiSlice";
import { toast } from "sonner";

const ProductList = ({ product, listId, detailRefetch, removeProductHandler }) => {
  const [status, setStatus] = useState(product.status);

  const [updateProduct, { isLoading }] = useUpdateProductMutation();

  const onCheckedChangeHandler = async (value) => {
    setStatus(value);
    try {
      await updateProduct({ listId, productId: product._id, status: value }).unwrap();
      detailRefetch();
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      setStatus(!value);
    }
  };

  return (
    <div className="grid grid-cols-12 space-y-2 justify-between items-center w-full">
      <h3 className="col-span-5 md:col-span-7">{product.name}</h3>
      <Switch className="col-span-3 md:col-span-2" checked={status} onCheckedChange={onCheckedChangeHandler} />
      <Button className="col-span-4 md:col-span-3" value={product._id} onClick={removeProductHandler}>
        Delete
      </Button>
    </div>
  );
};

export default ProductList;
