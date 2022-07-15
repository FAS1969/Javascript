const TableColumnActions = props => {
  const { row, column } = props;
  const [openActions, setOpenActions] = useState(false);
  useOnClickOutside(popupRef, () => setOpenActions(false));
  const renderMenu = useTableActionsContext();

  const menuOptions = renderMenu({
    row,
    column,
    styles,
  });

  return (
    <div className="relative">
      {openActions ? (
          <ul className={styles.actionsMenu}>{menuOptions}</ul>
      ) : null}
    </div>
  );
};
