import { removeProductToCard } from "@/Redux/feature/ShopCards/ShopCards";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

export default function ShopCard({
  itemCard,
  index,
}: {
  itemCard: any;
  index: number;
}) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between px-6 items-center border-b border-gray-400 py-3">
      <div className="flex gap-6">
        <img
          className=" h-[70px]"
          src={
            Array.isArray(itemCard.product?.ProductsImage)
              ? itemCard.product?.ProductsImage[0]
              : itemCard.product?.image
          }
          alt="product image"
        />
        <div className="justify-items-start">
          <ul>
            <li className="line-clamp-1">{itemCard.product.ProducName}</li>
            <li className="text-sm text-gray-600">
              <span>item price:</span>
              {itemCard.product?.productSaleprice?.$numberDecimal ||
                itemCard.product?.price}
              $ X{itemCard.count}
            </li>
            <li className="font-bold text-xl">
              {" "}
              {(itemCard.product?.productSaleprice?.$numberDecimal ||
                itemCard.product?.price) * itemCard.count}
              $
            </li>
          </ul>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(removeProductToCard({ index: index }));
          }}
        >
          <Trash2
            className="hover:text-red-400 cursor-pointer text-red-600 text-sms"
            strokeWidth={0.8}
          />
        </button>
      </div>
    </div>
  );
}
