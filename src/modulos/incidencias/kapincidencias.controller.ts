import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IncidenciasService } from './kapincidencias.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly incidenciasService:IncidenciasService ) {}

  @Post()
  create(@Body() createClienteDto: CreateClienteDto) {
    return this.incidenciasService.create(createClienteDto);
  }

  @Get()
  findAll() {
    return this.incidenciasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.incidenciasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateClienteDto: UpdateClienteDto) {
    return this.incidenciasService.update(+id, updateClienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.IncidenciasServices.remove(+id);
  }
}
