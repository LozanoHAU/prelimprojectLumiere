import { Component, signal, computed } from '@angular/core'; // 1. Add computed
import { CommonModule } from '@angular/common';

interface EmployeeModel {
  employeeNumber: string;
  fullName: string;
  gender: string;
  email: string;
  employmentStatus: 'Active' | 'Inactive' | 'On Leave';
  salary: number;
  position: string;
  department: string;
}

@Component({
  selector: 'app-employee',
  imports: [CommonModule],
  templateUrl: './employee.html',
  styleUrl: './employee.css',
})
export class Employee {
  protected readonly employees = signal<EmployeeModel[]>([
    {
      employeeNumber: 'EMP001',
      fullName: 'Sarah Mitchell',
      gender: 'Female',
      email: 'sarah.mitchell@lumiere.com',
      employmentStatus: 'Active',
      salary: 95000,
      position: 'Chief Pilot',
      department: 'Flight Operations'
    },
    {
      employeeNumber: 'EMP002',
      fullName: 'James Chen',
      gender: 'Male',
      email: 'james.chen@lumiere.com',
      employmentStatus: 'Active',
      salary: 110000,
      position: 'Technical Director',
      department: 'Engineering'
    },
    {
      employeeNumber: 'EMP003',
      fullName: 'Maria Rodriguez',
      gender: 'Female',
      email: 'maria.rodriguez@lumiere.com',
      employmentStatus: 'Active',
      salary: 85000,
      position: 'Choreography Specialist',
      department: 'Creative'
    },
    {
      employeeNumber: 'EMP004',
      fullName: 'David Thompson',
      gender: 'Male',
      email: 'david.thompson@lumiere.com',
      employmentStatus: 'On Leave',
      salary: 75000,
      position: 'Drone Technician',
      department: 'Maintenance'
    },
    {
      employeeNumber: 'EMP005',
      fullName: 'Lisa Park',
      gender: 'Female',
      email: 'lisa.park@lumiere.com',
      employmentStatus: 'Active',
      salary: 92000,
      position: 'Event Coordinator',
      department: 'Client Services'
    },
    {
      employeeNumber: 'EMP006',
      fullName: 'Michael Johnson',
      gender: 'Male',
      email: 'michael.johnson@lumiere.com',
      employmentStatus: 'Active',
      salary: 78000,
      position: 'Safety Officer',
      department: 'Operations'
    },
    {
      employeeNumber: 'EMP007',
      fullName: 'Emily Davis',
      gender: 'Female',
      email: 'emily.davis@lumiere.com',
      employmentStatus: 'Inactive',
      salary: 68000,
      position: 'Marketing Specialist',
      department: 'Marketing'
    },
    {
      employeeNumber: 'EMP008',
      fullName: 'Robert Kim',
      gender: 'Male',
      email: 'robert.kim@lumiere.com',
      employmentStatus: 'Active',
      salary: 105000,
      position: 'Software Engineer',
      department: 'Engineering'
    },
    {
      employeeNumber: 'EMP009',
      fullName: 'Amanda Foster',
      gender: 'Female',
      email: 'amanda.foster@lumiere.com',
      employmentStatus: 'Active',
      salary: 88000,
      position: 'Flight Operator',
      department: 'Flight Operations'
    },
    {
      employeeNumber: 'EMP010',
      fullName: 'Christopher Lee',
      gender: 'Male',
      email: 'christopher.lee@lumiere.com',
      employmentStatus: 'Active',
      salary: 125000,
      position: 'Operations Manager',
      department: 'Management'
    }
  ]);

  protected readonly filterStatus = signal<'All' | 'Active' | 'Inactive' | 'On Leave'>('All');

  // 2. Add Computed Signals for your counts
  readonly activeCount = computed(() => 
    this.employees().filter(e => e.employmentStatus === 'Active').length
  );

  readonly inactiveCount = computed(() => 
    this.employees().filter(e => e.employmentStatus === 'Inactive').length
  );

  readonly leaveCount = computed(() => 
    this.employees().filter(e => e.employmentStatus === 'On Leave').length
  );

  get filteredEmployees(): EmployeeModel[] {
    const status = this.filterStatus();
    if (status === 'All') {
      return this.employees();
    }
    return this.employees().filter(emp => emp.employmentStatus === status);
  }

  setFilter(status: 'All' | 'Active' | 'Inactive' | 'On Leave'): void {
    this.filterStatus.set(status);
  }

  // 3. Add a helper method for initials
  getInitials(name: string): string {
    return name.split(' ').map(n => n[0]).join('');
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'Active': return 'status-active';
      case 'Inactive': return 'status-inactive';
      case 'On Leave': return 'status-leave';
      default: return '';
    }
  }

  formatSalary(salary: number): string {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    }).format(salary);
  }
}