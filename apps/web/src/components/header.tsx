import Image from 'next/image';
import logoIcon from '../assets/coroa.svg';
import { ProfileButton } from './profile-button';
import { Slash } from 'lucide-react';
import { OrganizationSwitch } from './organization-switcher';
export function Header() {
  return (
    <div className="mx-auto flex max-w-[1200px] items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={logoIcon} alt='logo' className='size-6 dark:invert' />

        <Slash className='size-3 -rotate-[24deg] text-border' />

        <OrganizationSwitch />
      </div>

      <div className='flex items-center gap-4'>
        <ProfileButton />
      </div>
    </div>

  );
}
