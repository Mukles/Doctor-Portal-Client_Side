import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../../Helpers/Layout";
import Table from "../../Helpers/Table";

const PatientsList = () => {
  const { isLoading, isError, data, error } = useQuery("patientList", () =>
    axios.get(`${process.env.REACT_APP_API_BASEURL}/patient`)
  );
  return <Layout>{data?.data && <Table data={data?.data} />}</Layout>;
};

export default PatientsList;
