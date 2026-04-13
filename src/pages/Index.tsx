import SelectableTable from "@/components/SelectableTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-2 mb-8 text-center">
        <h1 className="text-2xl font-bold text-foreground">Checkbox & Tabela Selecionável</h1>
        <p className="text-muted-foreground">Componente customizado sem bibliotecas externas</p>
      </div>
      <SelectableTable />
    </div>
  );
};

export default Index;
