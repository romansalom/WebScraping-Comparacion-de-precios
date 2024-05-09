import Card from './Card';
const productos = [
  {
    title: 'Zapatillas Air Jordan 1 Low Se Lr Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1f7c742d/products/NIDZ4130-201/NIDZ4130-201-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Air Jordan 1 Low Se Craft G Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw66669367/products/NIDZ4135-002/NIDZ4135-002-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 4 Retro Red Cement Hombre',
    price: '359999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw166a7c9f/products/NIDH6927-161/NIDH6927-161-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Se Mujer',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1e69f84d/products/NIDV0427-100/NIDV0427-100-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Jumpman Mvp Hombre',
    price: '289999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8f67fcd6/products/NIDZ4475-041/NIDZ4475-041-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw348d5321/products/NIDQ8426-106/NIDQ8426-106-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Mid Se Craft',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw644f9c42/products/NIDM9652-120/NIDM9652-120-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Low Se Niño',
    price: '199999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw066b0a4f/products/NIFB2216-200/NIFB2216-200-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 3 Retro Hombre',
    price: '359999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw154afed2/products/NICT8532-148/NICT8532-148-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Jumpman Mvp Hombre',
    price: '289999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwff1708da/products/NIDZ4475-006/NIDZ4475-006-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Stay Loyal 2 Hombre',
    price: '209999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa08f80cc/products/NIDQ8401-006/NIDQ8401-006-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Max Aura 5 Hombre',
    price: '239999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw659b60e3/products/NIDZ4353-001/NIDZ4353-001-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air Xxxvii Hombre',
    price: '244999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb80cc243/products/NIDD6958-001/NIDD6958-001-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Luka 2 Hombre',
    price: '239999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4a13afc0/products/NIDX8733-103/NIDX8733-103-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw8737c2b7/products/NIDQ8426-515/NIDQ8426-515-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 4 Retro Mujer',
    price: '359999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1668ee85/products/NIAQ9129-103/NIAQ9129-103-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Air Jordan 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd039abe5/products/NIDQ8426-060/NIDQ8426-060-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 13 Retro Hombre',
    price: '361999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4bcb027d/products/NI414571-062/NI414571-062-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 200e Hombre',
    price: '154919.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb8d8ac53/products/NIDC9836-160/NIDC9836-160-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom Cmft 2 Hombre',
    price: '195999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwbede1544/products/NIDV1307-060/NIDV1307-060-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Low',
    price: '186999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1821d83d/products/NI553560-140/NI553560-140-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Acclimate Mujer',
    price: '287199.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb07811f6/products/NIDC7723-701/NIDC7723-701-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Delta 3 Low Hombre',
    price: '159299.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw227ed372/products/NIDN2647-060/NIDN2647-060-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Max Aura 5 Hombre',
    price: '239999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwebdbaee3/products/NIDZ4353-061/NIDZ4353-061-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Air Jordan 1 Mid Se Lr Mujer',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw611351c2/products/NIDZ3745-500/NIDZ3745-500-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air Legacy 312 Low Hombre',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2a20e705/products/NICD7069-101/NICD7069-101-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Dub Zero Hombre',
    price: '238479.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1ffe0e60/products/NI311046-162/NI311046-162-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Urbanas Jordan Jumpman Two Trey Hombre',
    price: '194319.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3a9233f2/products/NIDO1925-106/NIDO1925-106-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Mid Infantil Sintético',
    price: '189999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb9f6c755/products/NIDQ8423-511/NIDQ8423-511-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Mid Infantil',
    price: '189999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd6ea74a2/products/NIDQ8423-042/NIDQ8423-042-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Low Hombre',
    price: '209999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2c504537/products/NI553558-065/NI553558-065-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 200e',
    price: '154919.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw95ff612b/products/NI_DC9836-808/NI_DC9836-808-1.jpg?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom Cmft 2 Mujer',
    price: '279999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw4c20682a/products/NIDV1305-104/NIDV1305-104-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Delta 3 Low',
    price: '159299.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwfe0bfba3/products/NI_DN2647-003/NI_DN2647-003-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Stadium 90 Hombre',
    price: '256999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw5a1d6d05/products/NIDX4397-103/NIDX4397-103-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwd8151319/products/NIDQ8426-401/NIDQ8426-401-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Nike Air Jordan 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwcb3a8aba/products/NIDQ8426-006/NIDQ8426-006-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw235b6b53/products/NIDQ8426-400/NIDQ8426-400-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 3 Retro Mujer',
    price: '359999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw923d2035/products/NICK9246-136/NICK9246-136-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 5 Retro Low Mujer',
    price: '329999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw943bc7a5/products/NIFJ4563-500/NIFJ4563-500-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Series 05',
    price: '92459.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw75e2da3e/products/NI_DM1681-781/NI_DM1681-781-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air Legacy 312 Low Hombre',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwedcb8432/products/NICD7069-004/NICD7069-004-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Elevate Low Mujer',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdaba196b/products/NIDH7004-400/NIDH7004-400-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Air Jordan XXXVIII FUNDAMENTALS Hombre',
    price: '359999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwdb857332/products/NIDZ3356-106/NIDZ3356-106-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb283bc85/products/NIDQ8426-701/NIDQ8426-701-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom Cmft 2 Hombre',
    price: '201039.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb27178e8/products/NIDV1307-205/NIDV1307-205-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Jumpman Two Trey Hombre',
    price: '192499.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb084e2aa/products/NIDO1925-140/NIDO1925-140-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Se Hombre',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc12806b0/products/NIDX4332-800/NIDX4332-800-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 1 Mid Mujer',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwc4ba0bb2/products/NIBQ6472-033/NIBQ6472-033-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Air 3 Retro',
    price: '361999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw799cad70/products/NICK9246-067/NICK9246-067-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Las Zapatillas  Básquet Jordan Zion 3 para Hombre',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2cb5b56c/products/NIDR0675-018/NIDR0675-018-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Nike Jumpman Two Trey Hombre',
    price: '194319.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw451fdd25/products/NIDO1925-102/NIDO1925-102-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom CMFT 2 Hombre',
    price: '279999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb536420e/products/NIDV1307-180/NIDV1307-180-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Delta 3 Low Mujer',
    price: '169139.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1a29fa58/products/NIFB9829-600/NIFB9829-600-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Básquet Jordan Zion 3 Hombre',
    price: '259999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw04e2ecae/products/NIDR0675-106/NIDR0675-106-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Air Jordan 1 Mid Hombre',
    price: '241299.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw2139428f/products/NIDQ8426-215/NIDQ8426-215-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Mid Hombre',
    price: '229999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dwb634742f/products/NIDQ8426-042/NIDQ8426-042-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Dub Zero Hombre',
    price: '298099.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw923ff42c/products/NI311046-021/NI311046-021-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan Stadium 90 Mujer',
    price: '256999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw1eae4b26/products/NIFB2269-041/NIFB2269-041-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Urbanas Jordan Jumpman Two Trey Hombre',
    price: '194319.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw7abf9692/products/NIDO1925-148/NIDO1925-148-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom CMFT 2 Mujer',
    price: '279999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw631fe443/products/NIDV1305-800/NIDV1305-800-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom CMFT 2 Hombre',
    price: '279999.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw3444152b/products/NIDV1307-408/NIDV1307-408-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Zapatillas Jordan 1 Zoom Cmft 2 Mujer',
    price: '287199.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw9e32517d/products/NIDV1305-004/NIDV1305-004-1.JPG?sw=600&sh=600',
  },
  {
    title: 'Short Jordan Flight Mujer',
    price: '69119.00',
    imageUrl:
      'https://www.moov.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-365-dabra-catalog/default/dw6ff36724/products/NIDQ4611-010/NIDQ4611-010-1.JPG?sw=600&sh=600',
  },
];
export default function Cards() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              havent heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {productos.map((producto, index) => (
              <div key={index} className="xl:w-1/4 md:w-1/2 p-4">
                <Card producto={producto} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
