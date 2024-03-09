import { Menu } from '@mantine/core';
import styled from 'styled-components';

const Button = styled.button`
  outline: none;
  font-family: var(--mantine-font-family);
  font-weight: 540 !important;
  user-select: none;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  );
  padding: 0.6rem 0.9rem 0.6rem 0.9rem;
  border-radius: 0.2rem; /* Set border-radius to a high value */
  font-size: 1.3rem;
  color: #fff;
  font-weight: 400;
  cursor: pointer;
  transition: height 0.2s, transform 0.2s;

  @media (max-width: 1025px) and (min-height: 900px) {
    align-self: center;
    font-size: 1.29rem;
  }
  @media (max-width: 800px) {
    align-self: center;
    font-size: 1.29rem;
  }
`;
const MenuItem1 = styled(Menu.Item)`
  background-color: #181818;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0.4rem;
  &:hover{
    background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  );
  }
`;
const MenuItem = styled(Menu.Item)`
  background-color: #181818;
  color: #fff;
  font-size: 1.1rem;
  margin-bottom: 0rem;
  &:hover{
    background: linear-gradient(
    135deg,
    rgba(0, 126, 242, 1),
    rgba(0, 58, 108, 1)
  );
  }
`;

const MenuItemIcon = styled.i`
  color: #fff;
  font-size: 20px;
`;

const DownloadOptions = () => {
  return (
    <Menu shadow="lg" width={170}>
      <Menu.Target>
        <Button>Download
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            fill="#fff"
            shape-rendering="geometricPrecision"
            text-rendering="geometricPrecision"
            image-rendering="optimizeQuality"
            fill-rule="evenodd"
            clip-rule="evenodd"
            viewBox="0 0 511.998 511.998"
          >
            <path
              fill-rule="nonzero"
              d="M255.999 0c70.684 0 134.695 28.658 181.018 74.981 46.324 46.324 74.981 110.334 74.981 181.018 0 70.691-28.657 134.695-74.981 181.018-46.323 46.324-110.327 74.981-181.018 74.981s-134.694-28.657-181.018-74.981C28.658 390.694 0 326.69 0 255.999c0-70.684 28.658-134.694 74.981-181.018C121.305 28.658 185.308 0 255.999 0zm-74.995 203.995c-29.412-16.955-43.962 6.609-27.542 23.789l84.234 95.914c15.311 15.318 21.289 15.318 36.607 0l84.234-95.914c16.303-17.26 2.086-40.686-27.55-23.789l-74.988 44.548-74.995-44.548zM410.99 101.009c-39.657-39.657-94.473-64.2-154.991-64.2-60.525 0-115.333 24.543-154.99 64.2-39.657 39.657-64.2 94.472-64.2 154.99 0 60.526 24.543 115.334 64.2 154.991 39.657 39.657 94.465 64.199 154.99 64.199 60.526 0 115.334-24.542 154.991-64.199 39.657-39.657 64.199-94.465 64.199-154.991 0-60.518-24.542-115.333-64.199-154.99z"
            />
          </svg>
        </Button>
      </Menu.Target>

      <Menu.Dropdown style={{ backgroundColor: '#333', border: 'none', display: 'flex', flexDirection: 'column', padding: '0.5rem', marginRight: '1rem' }}>
        <MenuItem1
        onClick = {()=>{
          window.open('https://play.google.com/store/apps/details?id=com.syneidisi.tagsocial')
        }}
        leftSection={<MenuItemIcon className="ri-google-play-fill" />}>
          Google Play
        </MenuItem1>
        <MenuItem
        onClick = {()=>{
          window.open('https://apps.apple.com/in/app/tagsocial/id6443448497')
        }}
        leftSection={<MenuItemIcon className="ri-apple-fill" />}>
          App Store
        </MenuItem>
      </Menu.Dropdown>
    </Menu>
  );
};

export default DownloadOptions;
