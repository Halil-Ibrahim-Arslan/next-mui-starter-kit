/* eslint-disable @typescript-eslint/no-explicit-any */
import { List } from "@mui/material";
import MenuTreeItem from "./MenuTreeItem";

type MenuItemProps = {
  data: any;
  leaf: boolean;
  handleClick: (id: any) => void;
};

export default function MenuItem({ data, leaf, handleClick }: MenuItemProps) {
  return (
    <List>
      {data.map((item: any) => (
        <MenuTreeItem
          key={item.id}
          item={item}
          // eslint-disable-next-line react/no-children-prop
          children={item.children.length > 0 ? true : false}
          leaf={leaf}
          handleClick={handleClick}
        />
      ))}
    </List>
  );
}
