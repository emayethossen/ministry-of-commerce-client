import React from 'react';
import { Layout, Menu, Input, Dropdown, Button } from 'antd';
import { SearchOutlined, DownOutlined } from '@ant-design/icons';
import Home from './Home';
import logo from '../assets/logo.png';

const { Header, Content, Sider } = Layout;
const items = [
  {
    "key": "1",
    "label": "Home"
  },
  {
    "key": "2",
    "label": "Project",
    "children": [
      {
        "key": "3",
        "label": "Running",
        "children": [
          {
            "key": "4",
            "label": "Running Projects"
          }
        ]
      },
      {
        "key": "5",
        "label": "Completed",
        "children": [
          {
            "key": "6",
            "label": "Completed Projects"
          }
        ]
      }
    ]
  },
  {
    "key": "7",
    "label": "Agencies",
    "children": [
      {
        "key": "8",
        "label": "Attached Department",
        "children": [
          {
            "key": "9",
            "label": "Bangladesh Trade and Tariff Commission"
          },
          {
            "key": "10",
            "label": "Export Promotion Bureau"
          },
          {
            "key": "11",
            "label": "Trading Corporation of Bangladesh"
          },
          {
            "key": "12",
            "label": "Directorate Of National Consumer Rights Protection"
          },
          {
            "key": "13",
            "label": "Office of the Registrar of Joint Stock Companies and Firms"
          },
          {
            "key": "14",
            "label": "Office of Chief Controller of Imports and Exports (CCI&E)"
          },
          {
            "key": "15",
            "label": "Bangladesh Tea Board"
          },
          {
            "key": "16",
            "label": "Bangladesh Competition Commission"
          },
          {
            "key": "17",
            "label": "Bangladesh Foreign Trade Institute"
          },
          {
            "key": "18",
            "label": "Business Promotion Council"
          },
          {
            "key": "19",
            "label": "The Institute of Cost and Management Accountants of Bangladesh"
          },
          {
            "key": "20",
            "label": "The Institute of Chartered Accountants of Bangladesh"
          },
          {
            "key": "21",
            "label": "Institute of Chartered Secretaries of Bangladesh"
          }
        ]
      }
    ]
  },
  {
    "key": "22",
    "label": "About",
    "children": [
      {
        "key": "23",
        "label": "About Ministry",
        "children": [
          {
            "key": "24",
            "label": "Commerce Ministry"
          },
          {
            "key": "25",
            "label": "History"
          },
          {
            "key": "26",
            "label": "Mission and Vision"
          },
          {
            "key": "27",
            "label": "Secretary List"
          },
          {
            "key": "28",
            "label": "Members of the Standing Committee"
          },
          {
            "key": "29",
            "label": "Organogram"
          },
          {
            "key": "30",
            "label": "Allocation of Business"
          },
          {
            "key": "31",
            "label": "Success and Achievement"
          }
        ]
      },
      {
        "key": "32",
        "label": "Employee",
        "children": [
          {
            "key": "33",
            "label": "Officers"
          },
          {
            "key": "34",
            "label": "Work Distribution"
          },
          {
            "key": "35",
            "label": "Information Officer"
          },
          {
            "key": "36",
            "label": "GRS Officer"
          },
          {
            "key": "37",
            "label": "Appellate Officer"
          },
          {
            "key": "38",
            "label": "Focal Point Officers"
          }
        ]
      },
      {
        "key": "39",
        "label": "Services",
        "children": [
          {
            "key": "40",
            "label": "Citizen Charter"
          },
          {
            "key": "41",
            "label": "List of Citizen e-Services"
          },
          {
            "key": "42",
            "label": "Business Fair"
          }
        ]
      }
    ]
  },
  {
    "key": "43",
    "label": "Contact",
    "children": [
      {
        "key": "44",
        "label": "Office Address"
      }
    ]
  }
]

const dropdownMenu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'Option 1',
      },
      {
        key: '2',
        label: 'Option 2',
      },
      {
        key: '3',
        label: 'Option 3',
      },
    ]}
  />
);

const MainLayout = () => {
  return (
    <Layout className="">
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className="bg-lightPink"
      >
        <div className="flex justify-center items-center my-4">
          <img src={logo} className="bg-white rounded-full w-12 h-12" alt="Logo" />
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} items={items} />
      </Sider>
      <Layout>
        <Header className="md:flex items-center justify-between bg-lightBlue h-auto md:py-8 py-4 shadow-md md:px-8 md:gap-4">
          <div className="md:flex items-center w-full justify-between">
            <div className='flex justify-between items-center'>
              <div className='flex items-center justify-center'>
                <img src={logo} className="bg-white rounded-full w-12 h-12 md:hidden" alt="Logo" />
              </div>
              <h1 style={{ fontFamily: '"Edu VIC WA NT Beginner", sans-serif' }} className='md:text-3xl text-xl font-bold'>
                <span className='text-green-500'>Ministry</span> Of Commerce
              </h1>
            </div>

            <div className='flex shadow-lg items-center justify-center'>
              <Input
                className="w-48 md:w-64 hidden md:flex"
                placeholder="Search..."
                // prefix={<SearchOutlined />}
              />
              <Button type="primary" className="text-white bg-blue-500 -ml-2 hidden md:flex">
                Search
              </Button>
            </div>
          </div>

          <div className='md:flex bg-lightBlue space-y-2 justify-between'>
            <div className="hidden md:flex items-center justify-center">
              <Dropdown className='hidden md:flex' overlay={dropdownMenu}>
                <Button className=" text-black">
                  Office <DownOutlined />
                </Button>
              </Dropdown>
              <Button type="primary" className="text-white bg-blue-500 -ml-2">
                Go
              </Button>
            </div>
            <div className='md:hidden flex shadow-lg items-center justify-center'>
              <Input
                className="w-48 md:w-64"
                placeholder="Search..."
                // prefix={<SearchOutlined />}
              />
              <Button type="primary" className="text-white -ml-2">
                Search
              </Button>
            </div>
          </div>

        </Header>
        <Content className="bg-lightCyan">
          <Home />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;

