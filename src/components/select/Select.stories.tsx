import Select from "./Select.tsx";

const SelectUI = () => (
  <Select.Root>
    <Select.Trigger aria-label="Food" placeholder="Select a fruit…" />
    <Select.Content>
      <Select.Group label={"Fruits"}>
        <Select.Item value="apple">Apple</Select.Item>
        <Select.Item value="banana">Banana</Select.Item>
        <Select.Item value="blueberry">Blueberry</Select.Item>
        <Select.Item value="grapes">Grapes</Select.Item>
        <Select.Item value="pineapple">Pineapple</Select.Item>
      </Select.Group>

      <Select.Separator />

      <Select.Group label={"Vegetables"}>
        <Select.Item value="aubergine">Aubergine</Select.Item>
        <Select.Item value="broccoli">Broccoli</Select.Item>
        <Select.Item value="carrot" disabled>Carrot</Select.Item>
        <Select.Item value="courgette">Courgette</Select.Item>
        <Select.Item value="leek">Leek</Select.Item>
      </Select.Group>

      <Select.Separator />

      <Select.Group label={"Meat"}>
        <Select.Item value="beef">Beef</Select.Item>
        <Select.Item value="chicken">Chicken</Select.Item>
        <Select.Item value="lamb">Lamb</Select.Item>
        <Select.Item value="pork">Pork</Select.Item>
      </Select.Group>
    </Select.Content>
  </Select.Root>
);

export default {
  component: SelectUI,
};

export const Select_ = () => <SelectUI/>;
