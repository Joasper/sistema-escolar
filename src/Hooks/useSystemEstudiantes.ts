import { useDispatch, useSelector } from "react-redux/es/exports";
import { EstudianteSlice } from "./../Store/Estudiantes/EstudianteSlice";
import { EstudiantesSliceProps } from "../Types/Estudiante";

export const useSystemEstudiantes = () => {
  const dispatch = useDispatch();
  const { estudiantes } = useSelector((state: any) => state.estudiantes);

  const OnSetEstudents = async () => {
    try {
    } catch (error) {}
  };

  return {
    //* PROPIEDADES
    estudiantes,

    //* METODOS
  };
};
