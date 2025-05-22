import React, { useState, useEffect } from 'react';

interface DashboardData {
  totalItens: number;
  itensAtivos: number;
  performance: {
    tempoMedioResposta: string;
    uptime: string;
    requestsHoje: number;
  };
}

const Dashboard: React.FC = () => {
  const [dados, setDados] = useState<DashboardData | null>(null);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    // Simular carregamento de dados
    const carregarDados = async () => {
      setCarregando(true);
      
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setDados({
        totalItens: Math.floor(Math.random() * 1000),
        itensAtivos: Math.floor(Math.random() * 800),
        performance: {
          tempoMedioResposta: `${Math.floor(Math.random() * 100)}ms`,
          uptime: '99.9%',
          requestsHoje: Math.floor(Math.random() * 10000)
        }
      });
      
      setCarregando(false);
    };

    carregarDados();
  }, []);

  if (carregando) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        <span className="ml-3 text-gray-600">Carregando dados...</span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          Dashboard - E-commerce API
        </h2>
        <p className="text-gray-600">
          Bem-vindo ao painel de controle do seu protótipo. 
          Aqui você pode visualizar as principais métricas e informações.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-blue-800 mb-2">Total de Itens</h3>
          <p className="text-3xl font-bold text-blue-600">{dados?.totalItens}</p>
          <p className="text-sm text-blue-600 mt-1">Registros no sistema</p>
        </div>

        <div className="bg-green-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-green-800 mb-2">Itens Ativos</h3>
          <p className="text-3xl font-bold text-green-600">{dados?.itensAtivos}</p>
          <p className="text-sm text-green-600 mt-1">Em uso atualmente</p>
        </div>

        <div className="bg-purple-50 rounded-lg p-6">
          <h3 className="text-lg font-medium text-purple-800 mb-2">Requests Hoje</h3>
          <p className="text-3xl font-bold text-purple-600">{dados?.performance.requestsHoje}</p>
          <p className="text-sm text-purple-600 mt-1">Chamadas à API</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">Performance do Sistema</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">{dados?.performance.tempoMedioResposta}</p>
            <p className="text-sm text-gray-500">Tempo Médio de Resposta</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-700">{dados?.performance.uptime}</p>
            <p className="text-sm text-gray-500">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-green-600">Funcionando</p>
            <p className="text-sm text-gray-500">Status do Sistema</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-medium text-yellow-800 mb-2">💡 Sobre este Protótipo</h4>
        <p className="text-yellow-700 text-sm">
          Este é um protótipo funcional gerado automaticamente pelo Vivo AI Team. 
          Ele demonstra a estrutura e funcionalidades básicas do sistema E-commerce API. 
          Para implementação em produção, considere adicionar autenticação, validações avançadas e integração com banco de dados real.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;