import { Box, Button } from "@mui/material";
import MenuItem from "@/components/Menu/MenuItem";

interface IMenu {
  id: string;
  name: string;
  path: string | null;
  index: boolean;
  companyCode: string | null;
  icon: string;
  children: IMenu[];
}

const data: IMenu[] = [
  {
    id: "1",
    name: "Ürün Giriş",
    path: null,
    index: false,
    companyCode: null,
    icon: "material-symbols-light:input-rounded",
    children: [],
  },
  {
    id: "6",
    name: "Operasyonlar",
    path: null,
    index: false,
    companyCode: null,
    icon: "healthicons:emergency-operations-center-outline",
    children: [],
  },
  {
    id: "28",
    name: "Sorgulamalar",
    path: null,
    index: false,
    companyCode: null,
    icon: "fluent:box-search-24-regular",
    children: [],
  },
];

const SidenavContainer = () => {
  return (
    <>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <img src={'./vercel.svg'} alt="logo" style={{ height: "60px", width: "100%" }} />
      </Box>
      <Box sx={{ mt: 1 }}>
        {data && data.length > 0 && (
          <MenuItem
            data={data}
            leaf={false}
            handleClick={(id) => {
              console.log(id);
            }}
          />
        )}
      </Box>
      <Button
        variant="contained"
        sx={{ position: "absolute", bottom: 20, left: 10, right: 10 }}
      >
        Oturum Kapat
      </Button>
    </>
  );
};

export default SidenavContainer;
