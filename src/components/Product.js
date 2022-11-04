import React from "react";
import { Link } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productActions";

export default function Product({ product }) {
  const { name, price, id } = product;

  const dispatch = useDispatch();

  //  Confirmar si desea eliminarlo
  const confirmDeleteProduct = (id) => {
    //  preguntar al usuario

    //  pasarlo al dispatch
    dispatch(deleteProductAction(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">$ {price}</span>{" "}
      </td>
      <td className="accions">
        <Link to={"/products/edit/${id}"} className="btn btn-primary mr-2">
          Editar
        </Link>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
}