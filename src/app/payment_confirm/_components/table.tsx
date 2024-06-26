import { Card, Typography } from "@material-tailwind/react";
import { Avatar, AvatarGroup } from "@mui/material";

const TABLE_HEAD = ["SR", "PRODUCT NAME", "QUANTITY", "COLOR", "ITEM PRICE", "TOTAL PRICE"];


export function Table_Products({ order_respons }: { order_respons: any }) {
    const TABLE_ROWS: Array<{
        ProducName: string, count: string, productSaleprice: string, total: string, _id: string
    }> = [];



    order_respons.products.map((prodact1: any, index: number) => {
        TABLE_ROWS.push({
            ProducName: order_respons.products2[index].ProducName,
            _id: prodact1?.id,
            count: prodact1.count,
            productSaleprice: order_respons.products2[index].productSaleprice.$numberDecimal,
            total: (+order_respons.products2[index].productSaleprice.$numberDecimal * prodact1.count).toString(),

        })
    })



    return (
        <Card className="h-full w-full overflow-auto" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th
                                key={head}
                                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                            >
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody >
                    {TABLE_ROWS.map(({ ProducName: product_name, count: quantity, productSaleprice: item_price, total, _id }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = "p-4 border-b border-blue-gray-50 ";

                        return (
                            <tr className="" key={index}>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    >
                                        {index}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        as="a"
                                        href={`/product/${_id}`}
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal max-w-36 overflow-hidden truncate text-nowrap" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    >
                                        {product_name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    >
                                        {quantity}
                                    </Typography>
                                </td>

                                <td className={classes + "flex justify-start"}>
                                    <AvatarGroup  >
                                        {order_respons?.colors ?
                                            order_respons.colors.map((e: string) => {
                                                return <Avatar src="" sx={{ width: 24, height: 24, bgcolor: e }} >.</Avatar>
                                            }) :
                                            <Avatar src="" sx={{ width: 24, height: 24 }} >D</Avatar>
                                        }
                                    </AvatarGroup>
                                </td>

                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    >
                                        {item_price}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className=" text-red-400 font-semibold" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                                    >
                                        {total}
                                    </Typography>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Card>
    );
}