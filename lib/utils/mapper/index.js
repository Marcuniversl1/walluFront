export const mapMenus = (menuData) => {
  const parseItems = (items) => {
    return items?.data?.map((item) => ({
      id: item.id,
      label: item.attributes.title,
      url: item.attributes.url,
      target: item.attributes.target,
      children: parseItems(item?.attributes?.children),
    }));
  };

  return parseItems(menuData?.attributes?.items);
};
