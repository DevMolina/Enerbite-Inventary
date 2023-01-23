import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { InventaryList } from "../components/InventaryList"
import { ModalAddItem } from "../components/ModalAddItem"
import { ModalConfirmDelete } from "../components/ModalConfirmDelete"
import { ModalEditItem } from "../components/ModalEditItem"
import { ModalInfoItem } from "../components/ModalnfoItem"
import PaginationControlled from "../components/PaginationControlled"
import { InventaryLayout } from "../layout/InventaryLayout"

export const InventaryPage = () => {

  const { isActiveItem, confirmDelete, isEdit, isAddItem } = useSelector(state => state.inventary);
  return (
    <InventaryLayout>
      <Typography variant="h5" component="h5" mt={2}>
        Lista de Inventario
      </Typography>
      <hr />

      <InventaryList />


      <PaginationControlled />

      {
        !!isActiveItem
          ? <ModalInfoItem />
          : null
      }
      {
        confirmDelete
          ? <ModalConfirmDelete />
          : null
      }
      {
        isEdit
          ? <ModalEditItem />
          : null
      }
      {
        isAddItem
          ? <ModalAddItem />
          : null
      }

    </InventaryLayout>
  )
}
