-- Inserir os cursos
INSERT INTO cursos (nome_curso, codigo_curso) VALUES 
('TÉCNICO EM INFORMÁTICA SUBSEQUENTE', 'IPIBJ'),
('TÉCNICO EM AGROPECUÁRIA SUBSEQUENTE', 'AP3-BJ'),
('TÉCNICO EM INFORMÁTICA INTEGRADO', 'IIBJ'),
('TÉCNICO EM AGROPECUÁRIA INTEGRADO', 'APBJ'),
('TÉCNICO EM AGROINDÚSTRIA SUBSEQUENTE', 'AI3-BJ'),
('TÉCNICO EM AGROINDÚSTRIA INTEGRADO', 'AIBJ');

-- Componentes de: TÉCNICO EM INFORMÁTICA SUBSEQUENTE (IPIBJ)
INSERT INTO componentes_curriculares (periodo, codigo_componente, nome_componente, curso_id) VALUES
(1, 'IPIBJ 1', 'Lingua Portuguesa', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(1, 'IPIBJ.2', 'Matemática Aplicada', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(1, 'IPIBJ.3', 'Lógica de Programação I', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(1, 'IPIBJ.4', 'Eletricidade e Eletrônica Básica', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(1, 'IPIBJ.5', 'Organização, Instalações e Manutanção de Computadores I', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(1, 'IPIBJ.6', 'Sistemas Operacionais', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(2, 'IPIBJ. 7', 'Lingua Inglesa', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(2, 'IPIBJ.8', 'Ética Profissional', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(2, 'IPIBJ.9', 'Segurança do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(2, 'IPIBJ.10', 'Lógica de Programação II', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(2, 'IPIBJ 11', 'Organização, Instalação e Manutanção de Computadores II', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(2, 'IPIBJ.12', 'Banco de Dados', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(3, 'IPIBJ.13', 'Empreendedorismo', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(3, 'IPIBJ.14', 'Linguagem de Programação I', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(3, 'IPIBJ.15.', 'Administração de Redes de Computadores I', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(3, 'IPIBJ.20', 'Redes de Computadores', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(4, 'IPIBJ.16', 'Linguagem de Programação II', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(4, 'IPIBJ.17', 'Introdução a Engenharia de Software', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(4, 'IPIBJ.18', 'Administração de Redes de Computadores II', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ')),
(4, 'IPIBJ.19', 'Projeto, Gerência e Segurança de Redes', (SELECT id FROM cursos WHERE codigo_curso = 'IPIBJ'));

-- Componentes de: TÉCNICO EM AGROPECUÁRIA SUBSEQUENTE (AP3-BJ)
INSERT INTO componentes_curriculares (periodo, codigo_componente, nome_componente, curso_id) VALUES
(1, 'AINBJ.079', 'Lingua Portuguesa', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(1, 'AINBJ.080', 'Informática', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(1, 'APCBJ.070', 'Introdução à Zootecnia', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(1, 'APCBJ.066', 'Segurança do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(1, 'APCBJ.068', 'Introdução à Agricultura', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(1, 'APCBJ.069', 'Matemática', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(1, 'APCBJ.079', 'Mecanização Agricola', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(2, 'APCBJ.074', 'Olericultura', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(2, 'APCBJ.081', 'Construções e Instalações Rurais', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(2, 'APCBJ.082', 'Topografia', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(2, 'APCBJ.083', 'Zootecnia 1', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(2, 'APCBJ.063', 'Introdução à Metodologia Cientifica', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(3, 'APCBJ.065', 'Gestão do Negócio Agrícola', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(3, 'APCBJ.084', 'Zootecnia 2', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(3, 'APCBJ.080', 'Irrigação e Drenagem', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(3, 'APCBJ.078', 'Culturas Anuais', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(4, 'APCBJ.085', 'Zootecnia 3', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(4, 'APCBJ.086', 'Produção Agroindustrial', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(4, 'APCBJ.075', 'Fruticultura', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(4, 'APCBJ.076', 'Silvicultura', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(4, 'APCBJ.067', 'Agroecologia', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ')),
(4, 'APCBJ.064', 'Sociologia Rural', (SELECT id FROM cursos WHERE codigo_curso = 'AP3-BJ'));

-- Componentes de: TÉCNICO EM INFORMÁTICA INTEGRADO (IIBJ)
INSERT INTO componentes_curriculares (periodo, codigo_componente, nome_componente, curso_id) VALUES
(1, 'INFBJ.167', 'História I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.169', 'Biologia I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.170', 'Quimica I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.171', 'Física I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.172', 'Matemática I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.173', 'Eletricidade e Eletrônica Básica', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.174', 'Organização, Instalação e Manutenção de Computadores I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.175', 'Lógica de Programação', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.158', 'Lingua Portuguesa I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.159', 'Arte', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.160', 'Lingua Inglesa I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.161', 'Introdução à Metodologia Científica', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.162', 'Educação Física I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.163', 'Filosofia I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.164', 'Sociologia I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(1, 'INFBJ.165', 'Geografia I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.176', 'Lingua Portuguesa II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.177', 'Lingua Espanhola I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.178', 'Lingua Inglesa II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.179', 'Educação Física II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.180', 'Filosofia II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.181', 'Sociologia II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.182', 'Geografia II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.183', 'Ética Profissional', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.184', 'História II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ 185', 'Biologia II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.186', 'Física II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.187', 'Matemática II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.190', 'Sistemas Operacionais', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ.191', 'Redes de Computadores', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ 193', 'Linguagem de Programação I', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ 195', 'Banco de Dados', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(2, 'INFBJ 196', 'Química II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ 197', 'Lingua Portuguesa III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.198', 'Lingua Espanhola II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.199', 'Lingua Inglesa III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.200', 'Educação Física III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.201', 'Filosofia III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.202', 'Sociologia III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.203', 'Geografia III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.204', 'História III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.205', 'Segurança do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ 206', 'Biologia III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.207', 'Quimica III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.208', 'Física III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.209', 'Matemática III', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ 210', 'Linguagem de Programação II', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ 211', 'Introdução a Engenharia de Software', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ.192', 'Administração, Projeto. Gerència e Segurança de Redes', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ')),
(3, 'INFBJ 166', 'Empreendedorismo', (SELECT id FROM cursos WHERE codigo_curso = 'IIBJ'));

-- Componentes de: TÉCNICO EM AGROPECUÁRIA INTEGRADO (APBJ)
INSERT INTO componentes_curriculares (periodo, codigo_componente, nome_componente, curso_id) VALUES
(1, 'APCBJ.193', 'Lingua Portuguesa I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.194', 'Informática', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.195', 'Arte', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.196', 'Lingua Inglesa I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.197', 'Educação Física I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.198', 'Sociologia I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.199', 'Filosofia', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.200', 'Geografia I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.201', 'História I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.202', 'Biologia I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.203', 'Química I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.204', 'Fisica I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ 205', 'Matemática I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.206', 'Introdução à Agricultura', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.207', 'Agroecologia', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(1, 'APCBJ.208', 'Introdução a Zootecnia', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.209', 'Lingua Portuguesa II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.210', 'Introdução à Metodologia Científica', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.211', 'Lingua Inglesa II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.212', 'Lingua Espanhola I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.213', 'Educação Física II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.214', 'Sociologia II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.215', 'Filosofia II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.216', 'Geografia II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.217', 'História II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.218', 'Gestão de Negócio Agrícola', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.219', 'Biologia II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.220', 'Quimica II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.221', 'Física II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.222', 'Matemática II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.223', 'Irrigação e Drenagem', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.224', 'Construções e Instalações Rurals', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.225', 'Topografia', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.240', 'Olericultura', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.243', 'Mecanização Agricola', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(2, 'APCBJ.246', 'Zootecnia I', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.247', 'Zootecnia Il', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.244', 'Zootecnia III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.245', 'Produção Agroindustrial', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.241', 'Fruticultura', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.242', 'Culturas Anuais', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.226', 'Língua Portuguesa III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.227', 'Lingua Inglesa III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.228', 'Lingua Espanhola II', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.229', 'Educação Física III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.230', 'Sociologia III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ 231', 'Filosofia III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.232', 'Geografia III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.233', 'História III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.234', 'Segurança do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.235', 'Biologia III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.236', 'Química III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.237', 'Física III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.238', 'Matemática III', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ')),
(3, 'APCBJ.239', 'Silvicultura', (SELECT id FROM cursos WHERE codigo_curso = 'APBJ'));

-- Componentes de: TÉCNICO EM AGROINDÚSTRIA SUBSEQUENTE (AI3-BJ)
INSERT INTO componentes_curriculares (periodo, codigo_componente, nome_componente, curso_id) VALUES
(1, 'AINBJ.062', 'Nutrição', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.070', 'Conservação de Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.082', 'Sociologia do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.087', 'Química dos Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.088', 'Microbiologia dos Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.092', 'Análise Sensorial', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.084', 'Segurança do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.102', 'Educação Ambiental e Resíduos Agroindustriais', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ. 105', 'Lingua Portuguesa', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(1, 'AINBJ.106', 'Informática', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.085', 'Gestão e Empreendimentos Agroindustriais', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.101', 'Tecnologia no Processamento de Saneantes', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.093', 'Segurança Alimentar', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.095', 'Tecnologia na Obtenção do Leite', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.096', 'Controle de Qualidade e Legislação de Processamentos de Produtos Lácteos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.090', 'Análise Físico-quimica de Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.091', 'Análise Microbiologica de Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(2, 'AINBJ.081', 'Introdução à Metodologia Científica', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(3, 'AINBJ.083', 'Ética Profissional', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(3, 'AINBJ.097', 'Tecnologia no Processamento de Produtos Lácteos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(3, 'AINBJ.098', 'Tecnologia no Processamento de Frutas e Hortaliças', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(3, 'AINBJ.099', 'Tecnologia no Processamento de Produtos Carneos', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ')),
(3, 'AINBJ.100', 'Tecnologia no Processamento de Massas Alimenticias', (SELECT id FROM cursos WHERE codigo_curso = 'AI3-BJ'));

-- Componentes de: TÉCNICO EM AGROINDÚSTRIA INTEGRADO (AIBJ)
INSERT INTO componentes_curriculares (periodo, codigo_componente, nome_componente, curso_id) VALUES
(1, 'AINBJ.176', 'Lingua Portuguesa I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.177', 'Informática', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.178', 'Introdução à Metodologia Cientifica', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.179', 'Arte', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.180', 'Lingua Inglesa I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.181', 'Educação Física I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.182', 'Sociologia I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.183', 'Filosofia I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.184', 'Geografia I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.185', 'História I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.186', 'Segurança do Trabalho', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.187', 'Biologia I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.188', 'Química I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.189', 'Fisica I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.190', 'Matemática I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.191', 'Educação Ambiental e Resíduos Agroindustriais', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ.192', 'Nutrição', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ. 193', 'Microbiologia dos Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(1, 'AINBJ. 194', 'Análise Sensorial', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ. 195', 'Lingua Portuguesa II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ. 196', 'Lingua Inglesa II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ. 197', 'Educação Física II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ. 198', 'Sociologia II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.199', 'Filosofia II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ 200', 'Geografia II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.201', 'História II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.202', 'Biologia II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.203', 'Quimica II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ 204', 'Física II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.205', 'Matemática II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.206', 'Lingua Espanhola I', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.207', 'Análise Físico-química de Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.208', 'Análise Microbiológica de Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.210', 'Conservação de Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.213', 'Tecnologia no Processo de Saneantes', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.214', 'Ética Profissional', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ 215', 'Quimica dos Alimentos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(2, 'AINBJ.216', 'Segurança Alimentar', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.218', 'Lingua Portuguesa III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.219', 'Lingua Inglesa III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.220', 'Lingua Espanhola II', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.221', 'Educação Física III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.222', 'Sociologia III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.223', 'Filosofia III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.224', 'Geografia III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.225', 'História III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.226', 'Gestão e Empreendimentos Agroindustriais', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.227', 'Biologia III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.228', 'Química III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.229', 'Matemática III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.230', 'Fisica III', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.231', 'Tecnologia no Processamento de Produtos Lácteos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.232', 'Tecnologia no Processamento de Produtos Carneos', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ 211', 'Tecnologia no Processo de Frutas e Hortaliças', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ')),
(3, 'AINBJ.212', 'Tecnologia no Processo de Massas Alimenticias', (SELECT id FROM cursos WHERE codigo_curso = 'AIBJ'));