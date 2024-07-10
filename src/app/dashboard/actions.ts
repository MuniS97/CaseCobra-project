"use server"


import { db } from "@/db"
import { Orderstatus } from "@prisma/client"

export const changeOrderStatus = async ({
    id,
    newStatus
}: {
    id: string,
    newStatus: Orderstatus
}) => {
    await db.order.update({
        where: { id },
        data: { status: newStatus },
    })
}