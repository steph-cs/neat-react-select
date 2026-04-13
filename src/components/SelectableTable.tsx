import { useState } from "react";
import Checkbox from "./Checkbox";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const initialData: User[] = [
  { id: 1, name: "Ana Silva", email: "ana@email.com", role: "Admin", status: "Ativo" },
  { id: 2, name: "Bruno Costa", email: "bruno@email.com", role: "Editor", status: "Ativo" },
  { id: 3, name: "Carla Souza", email: "carla@email.com", role: "Viewer", status: "Inativo" },
  { id: 4, name: "Diego Lima", email: "diego@email.com", role: "Editor", status: "Ativo" },
  { id: 5, name: "Elena Rocha", email: "elena@email.com", role: "Admin", status: "Ativo" },
  { id: 6, name: "Felipe Alves", email: "felipe@email.com", role: "Viewer", status: "Inativo" },
];

const SelectableTable = () => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const allSelected = selected.size === initialData.length;
  const someSelected = selected.size > 0 && !allSelected;

  const toggleAll = () => {
    setSelected(allSelected ? new Set() : new Set(initialData.map((u) => u.id)));
  };

  const toggleOne = (id: number) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">Usuários</h2>
        {selected.size > 0 && (
          <span className="text-sm text-muted-foreground">
            {selected.size} de {initialData.length} selecionado(s)
          </span>
        )}
      </div>

      <div className="rounded-lg border border-border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted/50">
              <th className="w-12 px-4 py-3 text-left">
                <Checkbox
                  checked={allSelected}
                  indeterminate={someSelected}
                  onChange={toggleAll}
                />
              </th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Nome</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Cargo</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {initialData.map((user) => {
              const isSelected = selected.has(user.id);
              return (
                <tr
                  key={user.id}
                  onClick={() => toggleOne(user.id)}
                  className={`border-t border-border cursor-pointer transition-colors ${
                    isSelected ? "bg-primary/5" : "hover:bg-muted/30"
                  }`}
                >
                  <td className="px-4 py-3">
                    <Checkbox
                      checked={isSelected}
                      onChange={() => toggleOne(user.id)}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </td>
                  <td className="px-4 py-3 font-medium text-foreground">{user.name}</td>
                  <td className="px-4 py-3 text-muted-foreground">{user.email}</td>
                  <td className="px-4 py-3 text-muted-foreground">{user.role}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        user.status === "Ativo"
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectableTable;
