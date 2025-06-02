import { FormEvent, useState } from 'react';
import { Button } from './ui/button';
import jsPDF from 'jspdf';

interface FormData {
  tipoServico: string;
  area: string;
  detalhes: string;
}

const PRECOS_BASE = {
  construcao: 1500, // R$ por m²
  reforma: 800,    // R$ por m²
  acabamento: 400  // R$ por m²
};

export function OrcamentoForm() {
  const [formData, setFormData] = useState<FormData>({
    tipoServico: '',
    area: '',
    detalhes: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.tipoServico || !formData.area) {
      alert('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    const valorTotal = calcularOrcamento();
    gerarPDF(valorTotal);
  };

  const calcularOrcamento = () => {
    const precoBase = PRECOS_BASE[formData.tipoServico as keyof typeof PRECOS_BASE] || 0;
    const area = parseFloat(formData.area);
    return precoBase * area;
  };

  const gerarPDF = (valorTotal: number) => {
    const pdf = new jsPDF();
    const dataAtual = new Date().toLocaleDateString('pt-BR');

    // Configurações do PDF
    pdf.setFont("helvetica");
    pdf.setFontSize(20);
    pdf.text("Orçamento", 105, 20, { align: "center" });

    pdf.setFontSize(12);
    pdf.text(`Data: ${dataAtual}`, 20, 40);
    pdf.text("Detalhes do Orçamento:", 20, 60);
    
    // Informações do serviço
    pdf.text(`Tipo de Serviço: ${formData.tipoServico}`, 20, 80);
    pdf.text(`Área: ${formData.area} m²`, 20, 90);
    pdf.text(`Valor Total: R$ ${valorTotal.toLocaleString('pt-BR')}`, 20, 100);

    if (formData.detalhes) {
      pdf.text("Detalhes Adicionais:", 20, 120);
      const detalhesWrapped = pdf.splitTextToSize(formData.detalhes, 170);
      pdf.text(detalhesWrapped, 20, 130);
    }

    // Salvar o PDF
    pdf.save('orcamento.pdf');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label 
          htmlFor="tipo-servico" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Tipo de Serviço *
        </label>
        <select
          id="tipo-servico"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          value={formData.tipoServico}
          onChange={(e) => setFormData({ ...formData, tipoServico: e.target.value })}
          required
        >
          <option value="">Selecione um serviço</option>
          <option value="construcao">Construção</option>
          <option value="reforma">Reforma</option>
          <option value="acabamento">Acabamento</option>
        </select>
      </div>

      <div>
        <label 
          htmlFor="area" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Área (m²) *
        </label>
        <input
          type="number"
          id="area"
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Digite a área em metros quadrados"
          value={formData.area}
          onChange={(e) => setFormData({ ...formData, area: e.target.value })}
          required
          min="1"
        />
      </div>

      <div>
        <label 
          htmlFor="detalhes" 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Detalhes do Projeto
        </label>
        <textarea
          id="detalhes"
          rows={4}
          className="w-full rounded-md border border-gray-300 px-3 py-2"
          placeholder="Descreva os detalhes do seu projeto"
          value={formData.detalhes}
          onChange={(e) => setFormData({ ...formData, detalhes: e.target.value })}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setFormData({ tipoServico: '', area: '', detalhes: '' })}
        >
          Limpar
        </Button>
        <Button type="submit">
          Gerar Orçamento
        </Button>
      </div>
    </form>
  );
} 